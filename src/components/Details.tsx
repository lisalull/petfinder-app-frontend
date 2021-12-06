import { useEffect } from "react";
import { useParams } from "react-router";
import { getEventById } from "../services/EventsService";
import "./Details.css";

interface RouteParams {
  id: string;
}

const Details = () => {
  const { id } = useParams<RouteParams>();
  useEffect(() => {
    getEventById(id);
  }, [id]);
  return <div className="Details"></div>;
};

export default Details;
