# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

from firebase_functions import https_fn, options
from firebase_admin import initialize_app

from api.db_users import add_user
from api.db_contents import add_contents, get_contents_list, get_contents_detail
from api.make_contents import make_contents

initialize_app()

# cors setting
cors_config = options.CorsOptions(cors_origins="*", cors_methods=["get", "post"])

# runtime_opts = options.RuntimeOptions(
#     timeout_sec=540,
#     memory=options.MemoryOption.GB_1
# )

@https_fn.on_request()
def on_request_example(req: https_fn.Request) -> https_fn.Response:
    return https_fn.Response("Hello world!")

@https_fn.on_request(cors=cors_config)
def on_add_user(req: https_fn.Request) -> https_fn.Response:
    return add_user(req)

# ,secrets=["OPENAI_API_KEY_KAL"]
@https_fn.on_request(cors=cors_config, timeout_sec=540,memory=options.MemoryOption.GB_1)
def on_make_contents(req: https_fn.Request) -> https_fn.Response:
    return make_contents(req)

@https_fn.on_request(cors=cors_config)
def on_add_contents(req: https_fn.Request) -> https_fn.Response:
    return add_contents(req)

@https_fn.on_request(cors=cors_config,memory=options.MemoryOption.GB_1)
def on_get_contents_list(req: https_fn.Request) -> https_fn.Response:
    return get_contents_list(req)

@https_fn.on_request(cors=cors_config)
def on_get_contents_detail(req: https_fn.Request) -> https_fn.Response:
    return get_contents_detail(req)