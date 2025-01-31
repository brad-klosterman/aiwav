import fetch from 'node-fetch';

export const handler = async event => {
  console.log('Earnings notification triggered');

  const endpoint = `${process.env.GRAPH_API_URL}/earnings_notification`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'notification-api-key': process.env.NOTIFICATION_API_KEY,
      },
      body: JSON.stringify({}),
    });

    const { status } = response;
    console.log('Status:', status);

    return {
      statusCode: 200,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
