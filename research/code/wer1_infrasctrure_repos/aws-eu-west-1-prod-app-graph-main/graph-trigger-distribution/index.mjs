import fetch from 'node-fetch';

export const handler = async event => {
  console.log('Daily distribution triggered');

  const endpoint = `${process.env.GRAPH_API_URL}/daily_distribution`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'distribution-scheduler-key': process.env.DISTRIBUTION_SCHEDULER_KEY,
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
