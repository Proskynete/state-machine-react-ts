import { createMachine } from "xstate";

const fileMachine = createMachine({
  id: "files",
  type: "parallel",
  states: {
    upload: {
      initial: "initial",
      states: {
        initial: {
          on: {
            INIT_UPLOAD: {
              target: "uploading",
            },
          },
        },
        uploading: {
          on: {
            UPLOAD_SUCCESS: {
              target: "finished",
            },
          },
        },
        finished: {},
      },
    },
    download: {
      initial: "initial",
      states: {
        initial: {
          on: {
            INIT_DOWNLOAD: {
              target: "downloading",
            },
          },
        },
        downloading: {
          on: {
            DOWNLOAD_SUCCESS: {
              target: "finished",
            },
          },
        },
        finished: {},
      },
    },
  },
});

export { fileMachine };
