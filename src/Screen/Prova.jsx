//da aggiustare preso da app.jsx per provare le routes con useRoutes

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
      <SlideShow />
      <Dropdown />
      {state.isSideBar && (
        <SideBar dispatch={dispatch} isSidebar={state.isSideBar} />
      )}