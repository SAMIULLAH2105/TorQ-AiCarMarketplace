import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (err) {
      setError(err);
      toast.error(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fn, setData };
};

export default useFetch;
