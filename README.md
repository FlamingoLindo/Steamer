# Steamer

A modern web application for browsing and managing Steam user profiles and game libraries. Built with SvelteKit, TypeScript, and Tailwind CSS.

## Features

- Search and browse Steam users
- View detailed user profiles including:
  - User avatars and profile information
  - Account creation dates
  - Profile visibility settings
  - Country information
  - Currently played games
- Browse user game libraries with carousel navigation
- Responsive design with skeleton loading states
- Toast notifications for user feedback
- Pagination support for large datasets

## Tech Stack

- **Framework**: SvelteKit 2.47.1
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.14
- **UI Components**: Svelte 5.41.0
- **Notifications**: svelte-french-toast
- **Build Tool**: Vite 7.1.10
- **Code Quality**: ESLint, Prettier

## Project Structure

```bash
src/
├── lib/
│   ├── api/              # API client modules
│   │   ├── games.ts      # Games API service
│   │   ├── users.ts      # Users API service
│   │   └── dto/          # Data Transfer Objects
│   ├── components/       # Reusable Svelte components
│   │   ├── main-page/    # Main page components
│   │   ├── user-details/ # User details components
│   │   ├── shared/       # Shared components
│   │   └── skeletons/    # Loading skeleton components
│   ├── service/          # Business logic layer
│   ├── utils/            # Utility functions
│   └── toast/            # Toast notification utilities
└── routes/               # SvelteKit routes
    ├── +page.svelte      # Home page
    └── user-details/     # User details page
```

## Getting Started

### Prerequisites

- Node.js (version 20 or higher recommended)
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

1. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your API configuration:

```env
PUBLIC_API_URL=your_api_url_here
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run TypeScript type checking
- `npm run check:watch` - Run type checking in watch mode
- `npm run lint` - Lint code with ESLint and Prettier
- `npm run format` - Format code with Prettier

## API Usage

### Using the User Service

```typescript
import { userService } from '$lib/service/userService';

// Add a new user
const response = await userService.addUser({
  steam_id: '76561198088346306'
});

// Get user details
const user = await userService.getUser('76561198088346306');

// List users with pagination
const users = await userService.listUsers(1);

// Update user information
const updated = await userService.updateUser('76561198088346306');
```

### API Client Structure

```typescript
// API Response Interface
interface ApiResponse<T> {
  status: number;
  data: T;
}

// User API methods
class UserApi {
  async createUser<T>(endpoint: string, body: CreateUserDTO): Promise<ApiResponse<T>>
  async getUser<T>(endpoint: string): Promise<ApiResponse<T>>
  async listUsers<T>(endpoint: string, queryParams?: Record<string, string | number>): Promise<ApiResponse<T>>
  async updateUser<T>(endpoint: string, steam_id: string): Promise<ApiResponse<T>>
}
```

## Type Definitions

### User DTO

```typescript
interface GetUserResponseDTO {
  status: string;
  user: User;
}

interface User {
  steam_id: string;
  username: string;
  avatar: string;
  pf_url: string;
  country: string;
  current_game: null;
  persona_state: number;
  visibility: number;
  steam_created_at: Date;
  gameid: string;
}
```

## Component Examples

### Search User Component

```svelte
<script lang="ts">
  import { goto } from '$app/navigation';
  import { userService } from '$lib/service/userService';
  import { CustomToast } from '$lib/toast/custom.toast';
  
  let steam_id = $state('');
  let errorMessage = $state('');
  let isLoading = $state(false);

  async function handleSearch() {
    if (!steam_id.trim()) {
      errorMessage = 'Please enter a Steam ID';
      return;
    }

    isLoading = true;
    const response = await userService.addUser({ steam_id });
    
    if (response.status === 201) {
      goto(`/user-details/${steam_id}`);
    }
  }
</script>
```

### User Details Page

```svelte
<script lang="ts">
  import Avatar from '$lib/components/user-details/Avatar/Avatar.svelte';
  import UserName from '$lib/components/user-details/UserName/UserName.svelte';
  import Country from '$lib/components/user-details/Country/Country.svelte';
  
  let { data } = $props();
</script>

{#await data.userPromise}
  <UserDetailsSkeleton />
{:then response}
  {@const user = response.data.user}
  
  <div class="flex items-center gap-4">
    <Avatar {user} />
    <UserName username={user.username} pf_url={user.pf_url} />
    
    {#if user.visibility !== 1 && user.country}
      <Country country={user.country} />
    {/if}
  </div>
{/await}
```

## Components

### Main Page

- **SearchUser**: Search functionality for finding Steam users
- **UsersList**: Display list of users with pagination

### User Details

- **Avatar**: User profile picture display
- **UserName**: User name and profile information
- **Country**: User country with flag display
- **CurrentGame**: Currently played game information
- **SteamCreatedAt**: Account creation date
- **Visibility**: Profile visibility status

### Shared Components

- **Header**: Application header
- **GameHeader**: Game information header
- **GameCarousel**: Carousel for browsing games
- **Pagination**: Pagination controls
