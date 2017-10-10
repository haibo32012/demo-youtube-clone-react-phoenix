defmodule YoutubeWeb.Router do
  use YoutubeWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", YoutubeWeb do
    pipe_through :api

    resources "/users", UserController, except: [:new, :edit]
  end

  scope "/auth", YoutubeWeb do
    get "/:provider", AuthController, :request
    get "/:provider/callback", AuthController, :callback
  end
end
