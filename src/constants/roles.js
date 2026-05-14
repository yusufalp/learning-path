export const ROLE_MAP = {
  owner: {
    text: "Owner",
    description:
      "Full control over the entire platform, including billing and deletion",
  },
  admin: {
    text: "Admin",
    description: "Can manage users, profiles, content, and settings",
  },
  mentor: {
    text: "Mentor",
    description: "Can view and guide assigned mentees, access resources",
  },
  mentee: {
    text: "Mentee",
    description:
      "Active student in the program, can access learning materials and submit work",
  },
  alumni: {
    text: "Alumni",
    description: "Graduated member with access to community and career support",
  },
  read: {
    text: "Read-Only",
    description: "Can view content but cannot edit or interact",
  },
};
