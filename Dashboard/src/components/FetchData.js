import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
// import "./data.css";

export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "10bxoLAVyuBk01nRcPDFE2QGblxUIuUIx6WZuWRCPyLU",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <>
      <h1>Google Sheets Data</h1>
      <ul>
        {data.map((item, i) => (
          <Fragment key={i}>
            <li>Month - {item.month}</li>
            <li>Organic Source - {item.organic_source}</li>
            <li>Direct Source -- {item.direct_source}</li>
            <li>Referral Source - {item.refferal_source}</li>
            <li>Social Source - {item.social_source}</li>
            <li>Email Source -- {item.email_source}</li>
            <li>Page Views - {item.page_views}</li>
            <li>Users - {item.users}</li>
            <li>New Users -- {item.new_users}</li>
            <li>Sessions - {item.sessions}</li>
            <li>Number of Sessions per users - {item.number_of_sessions_per_users}</li>
            <li>Page Per Session -- {item.page_per_session}</li>
            <li>Average Session Time - {item.avg_session_time}</li>
            <li>Bounce Rate - {item.bounce_rate}</li>
            <br />
          </Fragment>
        ))}
      </ul>
    </>
  );
}
