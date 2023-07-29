import SearchInput from '@/components/client/searchInput';
import StoreInitializer from '@/components/client/StoreInitializer';
import usePeopleStore from '@/store/peopleStore';

const App = () => {
    const { data, searchText, loading, error } = usePeopleStore.getState();
    return (
        <div>
            <StoreInitializer
                searchText={searchText}
                data={data}
                loading={loading}
                error={error}
            />
            <SearchInput />
        </div>
    );
};

export default App;
