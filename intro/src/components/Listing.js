import React from "react";
import PropTypes from "prop-types";

function Listing({ item }) {
  return (
    <div className="item-list">
      {item.map((obj) => {
        if (!obj.title) {
          return null;
        }
        let level =
          obj.quantity <= 10
            ? "level-low"
            : obj.quantity <= 20
            ? "level-medium"
            : "level-high";
        return (
          <div key={obj.listing_id} className="item">
            <div className="item-image">
              <a href={obj.url}>
                <img
                  src={obj.MainImage.url_570xN}
                  alt={obj.title}
                  width="100"
                />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">
                {obj.title.length <= 50
                  ? obj.title
                  : obj.title.slice(0, 50) + "..."}
              </p>
              <p className="item-price">
                {obj.currency_code === "USD"
                  ? "$"
                  : obj.currency_code === "EUR"
                  ? "€"
                  : obj.currency_code}
                {obj.price}
              </p>
              <p className={`item-quantity ${level}`}>{obj.quantity} left</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

Listing.defaultProps = {
  item: [],
};

Listing.propTypes = {
  item: PropTypes.array,
};

export default Listing;
