# hatch-demo

## Setup Instructions

### Payment Gateway

1. Sign up for a payment gateway service like Stripe or PayPal.
2. Obtain the API keys from the payment gateway service.
3. Configure the payment gateway in the application by adding the API keys to the `src/config/paymentGateway.ts` file.

### Azure Hosting

1. Create an Azure account if you don't have one.
2. Create a new Azure App Service.
3. Configure the Azure App Service to deploy the application from your repository.
4. Update the `src/config/azure.ts` file with your Azure App Service details.

### MySQL Database

1. Install MySQL on your local machine or use a cloud-based MySQL service.
2. Create a new database for the application.
3. Update the `src/config/database.ts` file with your MySQL database connection details.
4. Run the database migration scripts to set up the database schema.
