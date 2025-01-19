#!/bin/sh
echo "Waiting for PostgreSQL to be ready..."
while ! nc -z postgres 5432; do
  sleep 1
done
echo "PostgreSQL is ready!"

echo "Running database migrations..."
pnpm payload migrate
echo "Starting the application..."
node server.js