defmodule YoutubeWeb.Router do
  use YoutubeWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", YoutubeWeb do
    pipe_through :api
  end
end
