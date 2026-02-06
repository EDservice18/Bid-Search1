# Bid Search + Data-Tracking (Static Demo)

A small static web app that demonstrates bid search, tracking, and source management using vanilla HTML, CSS, and JavaScript.

## Features
- Dashboard summary tiles
- Open Bids list with filters and sorting
- Track bids with localStorage persistence
- Tracked Bids with editable status, tags, notes, reminders
- Export tracked bids to CSV
- Sources CRUD with localStorage persistence
- Settings for Demo Mode, Real Search Mode, and Live Mode

## Running
Open index.html directly in a browser.

Note: Some browsers block fetch() when opening files via the file:// protocol. If demo data does not load, run a local server and open the app at http://localhost. Any simple static server works.

## Data Files
- data/sample-bids.json (demo bids)
- data/sources.json (default sources)

## Real Search Mode / Live Mode
Real search is stubbed. When enabled, the app attempts to call GET /api/bids and falls back to Demo Mode if unavailable. Live Mode behaves the same, but labels the app as Live for visibility.
