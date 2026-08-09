import React, { useState } from "react";
import {
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const SearchNews = () => {
  const history = useHistory();

  const [rightFocus, setRightFocus] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    const keyword = searchKeyword.trim();

    if (!keyword) {
      return;
    }

    history.push(
      `/news-search/${encodeURIComponent(keyword)}`
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  return (
    <InputGroup
      className={rightFocus ? "input-group-focus" : ""}
    >
      <Input
        className="h5 description"
        placeholder="Search News"
        type="text"
        value={searchKeyword}
        onFocus={() => setRightFocus(true)}
        onBlur={() => setRightFocus(false)}
        onChange={(event) =>
          setSearchKeyword(event.target.value)
        }
        onKeyDown={handleKeyDown}
      />

      <InputGroupAddon addonType="append">
        <InputGroupText
          onClick={handleSearch}
          style={{
            cursor: searchKeyword.trim()
              ? "pointer"
              : "default",
          }}
          role="button"
          aria-label="Search news"
        >
          <i className="mr-auto ml-3 pr-1 fa fa-search" />
        </InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default SearchNews;