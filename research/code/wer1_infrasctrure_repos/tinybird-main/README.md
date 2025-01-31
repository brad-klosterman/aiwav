# Requirements

- Tinybird CLI (https://www.tinybird.co/docs/version-control/working-with-version-control.html)

# Version control

Tinybird Git integration has been set up to allow us to manage the data project using Git version control, just like you would with any other software project. We have taken a code-first approach where the UI online is read only and datasources & pipes should be created in code.

# Rudderstack

## Creating new Datasources for Rudderstack data

To create a new datasource for Rudderstack, we should create a datasource with two columns - `value` (JSON value) and `timestamp` (timestamp)

The schema for your datasource should look like this:

```
SCHEMA >
  value String `json:$`,
  timestamp DateTime `json:$.timestamp`

ENGINE "MergeTree"
ENGINE_SORTING_KEY "timestamp"
```

This schema defines two columns:

1. `value`: A string column that will store the full JSON value from Rudderstack.
2. `timestamp`: A datetime column that will store the timestamp.

The "MergeTree" engine is optimized for time-series data, and the `timestamp` column will be used as the sorting key.

To analyse the data in the JSON column, we need to materialise them in a materialised view and create an endpoint on top of that.

## Sending data from Rudderstack to Tinybird

We've taken an opt-in approach to the events that are sent to Tinybird. There is a transformation node on Rudderstack which decides if the event gets sent to Tinybird or not. If you would like to send an event to Tinybird, make sure to add it to the transformer. But before that, make sure that you have deployed the JSON column table beforehand, otherwise you will live in a world of painful quarantined events and data migrations.
