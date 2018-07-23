# Description:
#   Lookup user info from company directory
#
# Dependencies:
#   "fuzzaldrin": "^2.1.0"
#
# Commands:
#   hubot phone of <user query> - Return phone details for <user query>
#   hubot email of <user query> - Return email details for <user query>
#   hubot details of <user query> - Return all details for <user query>
#
# Author:
#   Angus Williams <angus@forest-technologies.co.uk>

{filter} = require 'fuzzaldrin'

# Define a list of users
directory = [
  {
    firstName: "Dahmen",
    lastName: "Rolf",
    fullName: "Dahmen Rolf",
    email: "d.rolf@m3connect.de",
    phone: "980 986-68"
  },
  {
    firstName: "Philipp",
    lastName: "Habrich",
    fullName: "Philipp Habrich",
    email: "p.habrich@m3connect.de",
    phone: "980 986 -33"
  },
  {
    firstName: "Pia",
    lastName: "Göhnlich",
    fullName: "Pia Göhnlich",
    email: "p.göhnlich@m3connect.de",
    phone: "980 986 -67"
  },
  {
    firstName: "Emmanuel",
    lastName: "Ketcha Bepa",
    fullName: "Emmanuel Ketcha Bepa",
    email: "e.ketchabepa@m3connect.de",
    phone: "+44 700 700 703"
  },
  {
    firstName: "Yuriy",
    lastName: "Solovyov",
    fullName: "Yuriy Solovyov",
    email: "y.solovyov@m3connect.de",
    phone: "980 986 -54"
  }
]

module.exports = (robot) ->
  robot.respond /nummer ([\w .\-]+)\?*$/i, (res) ->
# Get user query from capture group and remove whitespace
    query = res.match[1].trim()

    # Fuzzy search the directory list for the query
    results = filter(directory, query, key: 'fullName')

    # Reply with results
    res.send "Found #{results.length} results for query '#{query}'"
    for person in results
      res.send "#{person.fullName}: #{person.phone}"

  robot.respond /email ([\w .\-]+)\?*$/i, (res) ->
# Get user query from capture group and remove whitespace
    query = res.match[1].trim()

    # Fuzzy search the directory list for the query
    results = filter(directory, query, key: 'fullName')

    # Reply with results
    res.send "Found #{results.length} results for query '#{query}'"
    for person in results
      res.send "#{person.fullName}: #{person.email}"

  robot.respond /info ([\w .\-]+)\?*$/i, (res) ->
# Get user query from capture group and remove whitespace
    query = res.match[1].trim()

    # Fuzzy search the directory list for the query
    results = filter(directory, query, key: 'fullName')

        # Reply with results
    res.send "Found #{results.length} results for query '#{query}'"
    for person in results
      res.send "#{person.fullName}: #{person.email}, #{person.phone}"
