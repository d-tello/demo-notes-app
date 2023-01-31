const config = {
    // Backend config
    s3: {
      REGION: process.env.REACT_APP_REGION,
      BUCKET: process.env.REACT_APP_BUCKET,
    },
    apiGateway: {
      REGION: process.env.REACT_APP_REGION,
      URL: process.env.REACT_APP_API_URL,
    },
    cognito: {
      REGION: process.env.REACT_APP_REGION,
      USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
      APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
      IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51MVvjQE05Z3Xa8h6id0mVjKyFylyp76kBGb7lF9eQ78brXmrAcTy9m7tZZxuqIl4qt70H4i1mRM9gdALBmhmAjTQ009gmjl7Vl",
  };
  
  export default config;