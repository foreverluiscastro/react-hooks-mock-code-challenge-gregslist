import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings , onDeleteListing }) {
  const listingsToDisplay = listings.map((listing) => <ListingCard key={listing.id} listing={listing} onDeleteListing={onDeleteListing}/>)

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
