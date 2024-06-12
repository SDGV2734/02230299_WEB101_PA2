This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
### Pokémon Pokedex Web Application

Greetings! Here is the Pokémon Pokedex web application that you are welcome to use. This is specifically a React based application that sits on top of Next. js to make the software provide a vibrant and flexible view of the Pokémon and the ways of using them. The application uses the PokéAPI to get information about Pokémon and has features for searching, opening Pokémon details, and managing the caught Pokémon menu.

#### Features
- Pokémon Listing: Poke list as a page with pagination where Pokémon are listed so the user can easily jump to the Pokémon they want to see.
- Search Functionality: Look for information about Pokémon by typing in a name or a part of it.
- Detailed View: Get to learn more about specific Pokémon by tapping on the Pokémon card; it reveals more information like type, abilities, height, weight, and experience.
- Catch and Release: That means for those who just captured a Pokémon you can return it into your collection if you no longer want it.
- Persistent State: A list of caught Pokémon is also kept for reference and is available to view apart from the screen.
- Responsive Design: Ensuring that the layout of the blog was,user friendly and responsive across all platforms including; the desktop version and the mobile version.

#### Technologies Used

- Next. js: The standalone tool for building SSR and static web apps with React.
- React: A set of packages in the programming language JavaScript designed for creating interfaces.
- Tailwind CSS: A CSS toolkit, built for the purposes of constructing the application and styling it as well.
- ShadCN: An up-to-date and powerful tool for managing UI components in modern React applications.
- PokéAPI: A highly functional RESTful API that covers all Pokémon-related information.

#### Key Directories and Files
- `/src/app/components`: Contains reusable UI components like PokemonCard, PokemonDetails, SearchBar, and Modal.

- `/src/app/hooks`: Custom hooks for data fetching, e.g., useFetchPokemon.

- `/src/app/pages`: The main pages for the application, including Home and Caught.

- `/src/app/store`: Zustand store for managing application state, particularly for managing caught Pokémon.
- `/src/app/styles`: CSS modules and stylesheets, including Tailwind configuration.
- `/src/utils`: Utility functions and constants, if any.

### Functionality Overview
#### Home Page
- Pokémon List: Displays a paginated list of Pokémon.
- Search Bar: Allows users to search for specific Pokémon by name.
- Card Click: Clicking on a Pokémon card shows detailed information about the Pokémon.
- Load More: Button to load more Pokémon in the list.
- Sticky Header: The header (including the search bar) remains at the top of the page as you scroll.
#### Pokémon Details
- Detailed Information: Shows Pokémon’s type, abilities, height, weight, and experience.
- Catch Button: Allows users to catch the Pokémon and add it to their collection.
- Back Button: Returns to the main Pokémon list.
#### Caught Pokémon Page
- Caught Pokémon List: Displays all Pokémon caught by the user.
- Release Button: Allows users to release a Pokémon back to the wild.
- Back to Pokedex: Link to return to the main Pokémon list.



