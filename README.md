# WildBitLab

WildBitLab is a local development regtest environment for the BSV blockchain, allowing you to easily spin up a customisable blockchain environment using Docker.

## Features

- **Customisable Node Setup**: Choose from example configurations with one, three, or five nodes.
- **User-Friendly**: Default configuration files are provided to get you started quickly.
- **Dashboard**: Includes Dashboards for monitoring and interacting with the blockchain.

## Getting Started

### Prerequisites

- Docker Desktop

### Setup

**Clone the Repository**

```
git clone git@github.com:nchain-innovation/wild-bit-lab.git
cd wild-bit-lab
```

**Configuration Files**

Ensure the following configuration files are in place:

- `./data/bitcoin.conf`: Configuration file for the BSV nodes. A default is provided in the repository.
- `./dashboard/config.js`: Configuration file for the Regtest Dashboard. This file includes settings for the local WhatsOnChain URL and the Orchestrator URL.

**Select Docker Compose File**

Choose one of the following Docker Compose files based on the number of nodes you want to run:

- `one-node.yml`
- `three-node.yml`
- `five-node.yml`

### Running the Environment

To start the environment, use the `docker compose` command with the selected Docker Compose file. For example, to start a three-node environment:

```
docker compose --file three-node.yml up
```

### Configuration

#### `bitcoin.conf`

The `bitcoin.conf` file located in the `./data` directory is used to configure the BSV nodes. A default configuration is provided, but you can customize it as needed.

#### `config.js`

The `config.js` file located in the `./dashboard` directory is used to configure the Regtest Dashboard. You can set the URLs for the local WhatsOnChain and Orchestrator.

## Regtest Dashboard

The Regtest Dashboard allows you to monitor and interact with your local BSV blockchain environment. Make sure the `config.js` file is properly set up with the correct URLs.

## WOC Dashboard

A Whats On Chain dashboard is included to allow interaction and inspection of the local BSV blockchain.

## Troubleshooting

- **Port Clashes**: If you experience port clashes, adjust the ports in the docker compose yaml file, then change the `config.js` file located in the `./dashboard` directory to match
- **Node Configuration**: Ensure your `bitcoin.conf` file is correctly configured and located in the `./data` directory.

## License

This project is licensed under the MIT License.  See the LICENSE file for details.

---
