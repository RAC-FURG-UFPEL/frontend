import styles from '../../styles/SearchBar/SearchBar.module.scss'
import { FaSearch } from 'react-icons/fa'

function SearchBar() {
    return (
        <>
            <div className={styles.SearchBar}>

                <div className={styles.searchBox}>

                    <input className={styles.searchInput} type="text" name="" placeholder="Buscar" />
                    <button className={styles.searchButton} href="#">
                        <i className={styles.material_icons}>
                            <FaSearch />
                        </i>
                    </button>
                </div>

            </div>
        </>
    )
}

export default SearchBar