import { API } from "aws-amplify";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { onError } from "../lib/errorLib";
import { useNavigate } from "react-router-dom";
import BillingForm from "../components/BillingForm";
import config from "../config";
import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const stripePromise = loadStripe(config.STRIPE_KEY);

  const billUser = (details) =>
    API.post("notes", "/billing", {
      body: details,
    });

  const handleFormSubmit = async (storage, { token, error }) => {
    if (error) {
      onError(error);
      return;
    }

    setIsLoading(true);

    try {
      await billUser({
        storage,
        source: token.id,
      });

      alert("Your card has been charged successfully!");
      nav("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  };

  return (
    <div className="Settings">
      <Elements
        stripe={stripePromise}
        fonts={[
          {
            cssSrc:
              "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800",
          },
        ]}
      >
        <BillingForm isLoading={isLoading} onSubmit={handleFormSubmit} />
      </Elements>
    </div>
  );
};

export default Settings;
