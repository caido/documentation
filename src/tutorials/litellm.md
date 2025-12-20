# Using LiteLLM with Shift

[LiteLLM](https://docs.litellm.ai/) is an open-source proxy/gateway that provides a unified interface for accessing multiple LLM providers.

In this tutorial, you will learn how to configure LiteLLM, Caido, and [Shift](/tutorials/shift.md) to use models from various providers that are not directly supported.

## LiteLLM Configuration

The following Docker compose file runs two services: LiteLLM and a PostgreSQL database for chat history persistence.

1. Save the following `docker-compose.yml` file and navigate to its directory:

```yml
services:
  litellm:
    build:
      context: .
      args:
        target: runtime
    image: ghcr.io/berriai/litellm:main-stable
    ports:
      - '4000:4000'
    environment:
      LITELLM_MASTER_KEY: sk-admin-key-1234567890
      DATABASE_URL: 'postgresql://llmproxy:dbpassword9090@db:5432/litellm'
      STORE_MODEL_IN_DB: 'True'
      STORE_PROMPTS_IN_SPEND_LOGS: 'True'
    depends_on:
      - db

  db:
    image: postgres:16
    restart: always
    container_name: litellm_db
    environment:
      POSTGRES_DB: litellm
      POSTGRES_USER: llmproxy
      POSTGRES_PASSWORD: dbpassword9090
    ports:
      - '5439:5432'
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
    name: litellm_postgres_data
```

2. With Docker running, enter the following terminal command:

```bash
docker compose up
```

<img alt="Launching the Docker containers." src="/_images/litellm_init.png" center />

3. Navigate to [http://localhost:4000/ui/login/](http://localhost:4000/ui/login/) in your browser and login.

<img alt="LiteLLM authentication." src="/_images/litellm_login.png" center />

4. Select `Models + Endpoints`, `Add a Model`, configure your model [provider](https://docs.litellm.ai/docs/providers/) details, and **click** on the `Add Model` button to save the configuration.

<img alt="LiteLLM provider configuration." src="/_images/litellm_provider.png" center />

5. Next, select `Virtual Keys`, click on the `+ Create New Key` button, configure the key, and click on the `Create Key` button to save the configuration.

<img alt="LiteLLM virtual key." src="/_images/litellm_key.png" center />

## Caido Configuration

1. **Click** on the account button <code><Icon icon="fas fa-user" /></code> in the top-right corner of the Caido user-interface, select `Settings`, and open the `AI` tab.
2. Add your virtual key to the `OpenAI API Key` field and the listening address of LiteLLM in the `OpenAI Base URL (optional)` field.

<img alt="Caido AI settings." src="/_images/litellm_ai_settings.png" center />

## Shift Configuration

1. Next, navigate to the `Models` interface of Shift, select `OpenAI` from the drop-down menu, and **click** on the `+ Add Custom Model` button.
2. In the pop-up window, select `OpenAI` from the drop-down menu, enter the alias of the model you created in LiteLLM, and provide the `Model ID` using the following syntax:

```txt
openai/<model>
```

<img alt="Shift custom model settings." src="/_images/litellm_custom_model.png" center />

3. **Click** on the `Add` button to save the configuration and then **click** on its sliding radio button to enable the model.

4. Once the model has been added, it will be available as an option in Shift's model selection drop-down menu.

<img alt="Shift custom model selection." src="/_images/litellm_shift.png" center />
