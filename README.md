# YouTube Search Application

In this ReactJs application 'YouTube Data API v3' Google API is used to connect with youTube search api through API key.

## Installation

Use the 'youtube-api-search' npm package for youTube API access.

```bash
npm install --save youtube-api-search
```

## Usage

```bash
YTSearch({ key: API_KEY, term: SEARCH_TERM }, (data) => {
   ...
});
```