import {
  Layout,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { BiSearch } from 'react-icons/bi';

export const Searchbar = ({ onSubmit, inputValue, onChange }) => {
  return (
    <Layout>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormBtn type="submit">
          <BiSearch size="22" />
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={onChange}
        />
      </SearchForm>
    </Layout>
  );
};
