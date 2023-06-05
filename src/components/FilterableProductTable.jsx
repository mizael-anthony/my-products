import React from "react";

export const FilterableProductTable = ({ products }) => {
    const [filterText, setFilterText] = React.useState("")
    const [inStockOnly, setInStockOnly] = React.useState(false)

    const handleFilterTextChange = (value) => {
        setFilterText(value)
    }

    const handleInStockOnlyChange = (value) => {
        setInStockOnly(value)
    }



    return (
        <div className="container">
            <h1>Product Container</h1>
            {JSON.stringify({ filterText, inStockOnly })}
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={handleFilterTextChange}
                onInStockOnlyChange={handleInStockOnlyChange}
            />
            <ProductTable
                filterText={filterText}
                inStockOnly={inStockOnly}
                products={products}
            />
        </div>
    )
}

const SearchBar = (props) => {
    const { filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange } = props

    const handleFilterTextChange = (e) => {
        onFilterTextChange(e.target.value)
    }

    const handleInStockOnlyChange = (e) => {
        onInStockOnlyChange(e.target.checked)
    }


    return (
        <div className="container">
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="filter_text"
                    id="filter_text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={handleFilterTextChange}
                />
            </div>
            <div className="form-group">
                <input type="checkbox" name="in_stock_only" id="in_stock_only" checked={inStockOnly} onChange={handleInStockOnlyChange} />
                <label htmlFor="Show in stock">Only show products in stock</label>
            </div>
        </div>
    )
}

const ProductTable = ({ filterText, inStockOnly, products }) => {

    /**
     * Ny nataoko manao réaffectation data
     */
    // if(filterText){
    //     products = products.filter(p => p.name.includes(filterText))
    // }

    // if(inStockOnly){
    //     products = products.filter(p => p.stocked === true)
    // }
    let lastCategory = ""

    // Test ajout fonction callback
    const handleTest = React.useCallback(() => {
        console.log("GG")
    }, [])

    const rows = products.map((product) => {
        const elements = [];

        if((inStockOnly && !product.stocked) || (product.name.indexOf(filterText) === -1)){
            return null
        }

        if (lastCategory !== product.category) {
            elements.push(<ProductCategoryRow key={product.category} category={product.category} />)
        }

        elements.push(<ProductRow onProductMounted={handleTest} key={product.name} product={product} />)

        lastCategory = product.category

        return elements;
    })


    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

const ProductCategoryRow = ({ category }) => {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    )
}

const ProductRow = React.memo(({ product }) => {
    const isStocked = product.stocked ? 'text-dark' : 'text-danger'
    console.log('render')
    return (
        <tr>
            <td className={isStocked}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
})

