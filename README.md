
## Deployment

Laravel Vender

```bash
  composer install
```

React Package

```bash
  npm install
```

Set Up Environment Variables
Duplicate the .env.example file and rename it to .env.

Update the necessary environment variables in the .env file.

Generating Application Key
Generate a new application key:

```bash
  php artisan key:generate
```

Running Migrations and Seeders
If your project requires a database, run migrations and seeders:

```bash
  php artisan migrate --seed
```

Compiling Assets
If your project uses frontend assets, compile them using npm:

```bash
  npm run dev
```

Running the Application
Start the Laravel development server:

```bash
  php artisan serve
```
