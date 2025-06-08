// controllers/contactController.js
import contacts from "../data/contactList.js";
import {
  filterByCity,
  sortByField,
  paginate,
  buildPaginatedResponse,
} from "../utils/snippet.js";

export function getAllContacts(req, res) {
  const {
    city,
    page = 1,
    limit = 10,
    sort = "asc",
    sortBy = "name",
  } = req.query;

  let result = filterByCity(contacts, city);
  result = sortByField(result, sort, sortBy);
  const paginated = paginate(result, page, limit);

  const response = buildPaginatedResponse(result, page, limit);
  response.results = paginated;

  res.json(response);
}

export function getContactById(req, res) {
  const { id } = req.params;
  const contact = contacts.find((c) => c.id === Number(id));

  if (!contact) {
    return res.status(404).json({ error: "Contact not found" });
  }

  res.json(contact);
}
