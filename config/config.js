module.exports = {
  clientId: "1136240896250220605", // The id of the discord bot
  guildId: "1134752438180663316", // The id of the discord server
  mainColor: "f6c42f", // The hex color of the embeds by default
  lang: "main", // If you want to set english please set "main"


  openTicketChannelId: "1137833312799428658", // The id of the channel where the message to create a ticket will be sent
  ticketTypes: [ // You have a limit of 25 types (the limit of Discord)
    {
      codeName: "TOURNAMENT-INFO", // The name need to be in lowercase
      name: "NEED HELP", // The name that will be displayed in the ticket
      emoji: "💡", // The emoji of the type (can be blank)
      color: "#FFFFFF", // Can be a hex color or blank to use the main color
      categoryId: "1137833380285780000", // The category id where the tickets will be created
      customDescription: "Please explain your suggestion in detail. If you have any images, please attach them to your message.\n\nReason: REASON", // The custom description of the ticket type (set to blank to use the default description)
      askReason: true // If the bot should ask the reason of the ticket
    },
    {
      codeName: "REPORT", // The name need to be in lowercase
      name: "REPORT ID", // The name that will be displayed in the ticket
      emoji: "🛑", // The emoji of the type (can be blank)
      color: "#f8312f", // Can be a hex color or blank to use the main color
      categoryId: "1137833380285780000", // The category id where the tickets will be created
      customDescription: "Please explain your report in detail. If you have any images, please attach them to your message.\n\nReason: REASON", // The custom description of the ticket type (set to blank to use the default description)
      askReason: true // If the bot should ask the reason of the ticket
    },
    {
      codeName: "other", // The name need to be in lowercase
      name: "Other", // The name that will be displayed in the ticket
      emoji: "", // The emoji of the type (can be blank)
      color: "#FFFFFF", // Can be a hex color or blank to use the main color
      categoryId: "1137833380285780000", // The category id where the tickets will be created
      customDescription: "", // The custom description of the ticket type (set to blank to use the default description)
      askReason: false // If the bot should ask the reason of the ticket
    }
  ],
  ticketNameOption: "Ticket-TICKETCOUNT", // Here is all parameter: USERNAME, USERID, TICKETCOUNT
  rolesWhoHaveAccessToTheTickets: [
    "1134804447466356827",
  ], // Roles who can access to the tickets
  pingRoleWhenOpened: true,
  roleToPingWhenOpenedId: "1134804447466356827", // The role to ping when a ticket is opened
  logs: true,
  logsChannelId: "1134752439476682784", // The id of the channel where the logs will be sent
  claimButton: true,
  whoCanCloseTicket: "STAFFONLY", // STAFFONLY (roles configured at "rolesWhoHaveAccessToTheTickets") or EVERYONE
  closeButton: true, // If false the ticket can be closed only by doing /closes
  askReasonWhenClosing: true, // If false the ticket will be closed without asking the reason
  maxTicketOpened: 0 // The number of tickets the user can open while another one is already open. Set to 0 to unlimited
}
