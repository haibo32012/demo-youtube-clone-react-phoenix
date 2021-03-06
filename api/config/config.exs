# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :youtube,
  ecto_repos: [Youtube.Repo]

# Configures the endpoint
config :youtube, YoutubeWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "sKbyuFdbbXOe1f6JwycwjBbllDsvtWxE7CLiNDWeFnF6ZFeCueUQ5PFHASRVelJ0",
  render_errors: [view: YoutubeWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Youtube.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Configures Guardian
config :guardian, Youtube.Guardian,
  issuer: "YoutubeClone",
  ttl: {30, :days},
  verify_issuer: true

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
