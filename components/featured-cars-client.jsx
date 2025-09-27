"use client";

import { useEffect, useMemo, useState } from "react";
import CarCard from "@/components/car-card";

export default function FeaturedCarsClient({ cars }) {
  const [wishlistIds, setWishlistIds] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/wishlist")
      .then((r) => (r.ok ? r.json() : { carIds: [] }))
      .then((data) => {
        if (!cancelled) setWishlistIds(Array.isArray(data.carIds) ? data.carIds : []);
      })
      .catch(() => {
        if (!cancelled) setWishlistIds([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const carsWithWishlist = useMemo(() => {
    const idSet = new Set(wishlistIds);
    return cars.map((car) => ({ ...car, wishlisted: idSet.has(car.id) }));
  }, [cars, wishlistIds]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {carsWithWishlist.map((car) => (
        <CarCard key={car.id} car={car} />)
      )}
    </div>
  );
}



