# CHL Statistics Website

## Description

This is a website that displays player statistics from the Canadian Hockey League. Statistics are available in both totals and rate (per game) form for the 2022-23, 2021-22, and 2020-21 seasons. The stats can be filtered according to several factors, including game strength (even-strength, powerplay, shorthanded, and all-situations), season, league, team, position, players, player birthdate range, and minimum games played. The resulting table of statistics can also be sorted by any of its columns.

A pair of notes for those looking for specific statistics: First, Ontario Hockey League statistics are not available for the 2020-2021 season as the OHL did not play any games due to the COVID-19 pandemic. Second, shot statistics are not available for the Western Hockey League as the WHL does not make these available.

The website can be viewed here: https://chl-stats-site.vercel.app

## Images

### Stats

![Screenshot of the website stats page](/demoscreenshot-stats.png?raw=true)

### Glossary

![Screenshot of the website glossary page](/demoscreenshot-glossary.png?raw=true)

## Motivation

The National Hockey League's greatest source of player talent is the junior-level Canadian Hockey League, consisting of the Ontario Hockey League, Western Hockey League, and Quebec Major Junior Hockey League. [80 of the 224 players selected at the 2023 NHL Draft played in the CHL, the most of any developmental hockey league in the world.](https://chl.ca/article/80-canadian-hockey-league-players-selected-2023-nhl-draft/) Player statistics like goals, assists, and points provide another tool with which future NHL players can be identified while playing junior hockey. Basic player statistics are available on the [CHL's website](chl.ca), but these stats lack the querying and detail required for in-depth analysis. My website displays a greater variety of stats as well as a greater ability to query statistics based on a variety of useful considerations, including (but not limited to) season, league, game state, and birthdate range. For example, a site user could query player statistics from the 2022-23 season for players born between 2004/09/15 and 2005/09/14 in order to compare player statistics for CHL players eligible for the 2023 NHL draft.

## How is it built?

The website is built with NextJS. Statistics are scraped from [chl.ca](https://chl.ca) and stored in a PostgreSQL database. The website and database are hosted with [Vercel](https://vercel.com).

## Contact

Email me: ecmcdougald@gmail.com
