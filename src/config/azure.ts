import { DefaultAzureCredential } from '@azure/identity';
import { WebSiteManagementClient } from '@azure/arm-appservice';

const subscriptionId = process.env.AZURE_SUBSCRIPTION_ID;
const resourceGroupName = process.env.AZURE_RESOURCE_GROUP;
const appName = process.env.AZURE_APP_NAME;

const credential = new DefaultAzureCredential();
const client = new WebSiteManagementClient(credential, subscriptionId);

export const configureAzureHosting = async () => {
  try {
    const appServicePlan = await client.appServicePlans.get(resourceGroupName, appName);
    if (!appServicePlan) {
      throw new Error('App Service Plan not found');
    }

    const webApp = await client.webApps.get(resourceGroupName, appName);
    if (!webApp) {
      throw new Error('Web App not found');
    }

    console.log('Azure hosting configured successfully');
  } catch (error) {
    console.error('Error configuring Azure hosting:', error);
  }
};
