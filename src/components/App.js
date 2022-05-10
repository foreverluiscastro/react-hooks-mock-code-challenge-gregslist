import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((listings) => setListings(listings));
  }, []);

  const refineListings = listings.filter((listing) => {
    if (search === "") return true;

    return listing.description.toLowerCase().includes(search.toLowerCase());
  });

  function handleDeleteListing(listingToDelete) {
    // example object for deletion
    // {
    //   id: 8,
    //   description: "Slighty used stratocaster",
    //   image:
    //     "https://media.guitarcenter.com/is/image/MMGS7/000000117879244-00-720x720.jpg",
    //   location: "Bed Stuy",
    // };

    // handle the backend deletion
    fetch(`http://localhost:6001/listings/${listingToDelete.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    // handle the front end deletion/page update
    const updatedList = listings.filter(
      (listing) => listing.id != listingToDelete.id
    );
    setListings(updatedList);
  }

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <ListingsContainer
        listings={refineListings}
        onDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
