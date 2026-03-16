function ProductList() {
  return (
    <div>
      <h2>ProductList</h2>
      <div>
        <h3>category container</h3>
      </div>
      <div>
        <h3>product filtered container</h3>
        <div className="flex flex-wrap gap-4 p-4 w-full justify-center ">
          {newData
            .filter((el, i) => i < 10)
            .map((city) => (
              <CityCard
                city={city}
                key={city.id}
                handleRemove={handleRemove}
                hovered={hovered}
                setHovered={setHovered}
                idHovered={idHovered}
                setIdHovered={setIdHovered}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
