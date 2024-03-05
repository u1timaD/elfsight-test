export const Filter = () => {
  return (
    <section className="sort">
      <div className="sort__wrapper">
        <span>Filter by:</span>
        <ul>
          <li>
            <span>Status:</span>
            <fieldset className="radio-set">
              <label>
                <input type="radio" name="status" />
                <span>Alive</span>
              </label>
              <label>
                <input type="radio" name="status" />
                <span>Dead</span>
              </label>
              <label>
                <input type="radio" name="status" />
                <span>Unknown</span>
              </label>
            </fieldset>
          </li>
          <li>
            <span>Gender:</span>
            <fieldset className="radio-set">
              <label>
                <input type="radio" name="gender" />
                <span>Male</span>
              </label>
              <label>
                <input type="radio" name="gender" />
                <span>Female</span>
              </label>
              <label>
                <input type="radio" name="gender" />
                <span>Genderless</span>
              </label>
              <label>
                <input type="radio" name="gender" />
                <span>Unknown</span>
              </label>
            </fieldset>
          </li>
        </ul>
      </div>
    </section>
  );
};
