import React, { Component } from 'react';


const ProductContext = React.createContext();
//provider


//Consumer


class ProductProvider extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            ProductFound: true,
            detailProduct: {},
            isLoading: true,
            cart: [],
            modalOpen: false,
            modalProduct: {},
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0,
            showCarosel: true,
            pageNumbers: [],
            currentPage: 1,
            itemsPerPage: 12,
            productCategories: [],
            productDepartments: [],
            productColors: [],
            masterCopy: [],
            searchResults: [],
            formData: {},
            email: '',
            password: '',
            user_name:'',
            user_email:'',
            user_password:'',
            showErrorAlert :false,
            ErrorMessage:'',
            activeUser:{},
            hasLogedIn:false,

            //ModalsValiables
            showLoginModal: false,
            showCreateNewUserModal:false
            

        }
        const MasterProducts = this.state.products;
    }


closeErrorAlert = () =>{
    this.setState(() =>{
        return{
         showErrorAlert:false
        }
    })
    
}
    //----------username change----
    changeHandle = (event) => {
        const { value, name } = event.target
        this.setState(() => {
            return {
                [name]: value
            }

        })
    }

    //-------------End of username chnage-

    //-------------------------LoginMethod----------------
    loginHandle = (event) => {

        event.preventDefault();

        const data = { email: this.state.email, password: this.state.password };

        console.log(data);

        fetch('http://app-256de236-c58d-471f-9955-aecb3eb83a3d.cleverapps.io/api/users/login', {
            method: 'POST',
            body: JSON.stringify(data),

            headers: {
                'Content-Type': 'application/json'
            }

        }).then(response => response.json())
        .then(data =>{
            if (data.status =='error'){
                
                this.setState(() =>{
                    return{
                     showErrorAlert:true,
                     ErrorMessage: JSON.stringify(data.data),
                   
                    }
                })
            }
            else{
                console.log('Access Granted');

                console.log(JSON.stringify(data.user));
                this.setState(() =>{
                    return{
                     showErrorAlert:false,
                     activeUser: data.user,
                     hasLogedIn:true
                    }
                })
                this.closeLoginModal();

            }
        })



    }

    //-----------------------End of Login Method-----------------


    logOutHandle =() =>{
        this.setState(() =>{
            return{
            
             activeUser: {},
             hasLogedIn:false
            }
        })

    }
    //------------Register New User Method------------------------
//-------------------------LoginMethod----------------
NewUserHandle = (event) => {

    event.preventDefault();

    const data = { name:this.state.user_name,email: this.state.user_email, password: this.state.user_password };

    console.log(data);

    fetch('http://app-256de236-c58d-471f-9955-aecb3eb83a3d.cleverapps.io/api/users/createNewUser', {
        method: 'POST',
        body: JSON.stringify(data),

        headers: {
            'Content-Type': 'application/json'
        }

    }).then(response => response.json())
    .then(data =>{
        if (data.status =='error'){
            
           this.setState(() =>{
               return{
                showErrorAlert:true,
                ErrorMessage: JSON.stringify(data.data)
               }
           })
        }
        else{
            console.log('Access Granted');
           this.CloseCreateNewUserModal()
           this.openLoginModal();

        }
    })



}

    //-----------End of Register New User Metho

    //---------------Show Create New User Modal-----
    OpenCreateNewUserModal =() =>{
        this.setState(() =>{
            return{
                showCreateNewUserModal:true,
                showErrorAlert:false

            }
        })

    }

    //-------------------End of Create New User Modal----
    CloseCreateNewUserModal =() =>{
        this.setState(() =>{
            return{
                showCreateNewUserModal:false,
                
                showErrorAlert:false

            }
        })

    }

    //------------Close new user modal.....---

    //---------------End of close new user modal

    //-----------Show CloseLogin Modal......
    closeLoginModal = () => {
        this.setState(() => {

            this.closeErrorAlert();
            return {
                showLoginModal: false
            }
        })

    }
    //-------------End of CloseLogin Modal------


    //-----------------Show OpenLogin Modal-------
    openLoginModal = () => {
        this.setState(() => {
            return {
                showLoginModal: true
            }
        })

    }
    //-----------End of OpenLogin Modal......

    searchProducts = (event) => {
        console.log(event.target.value)
        const tempProducts = this.state.masterCopy;
        const Sresults = [];

        tempProducts.map(item => {

            if (item.name.includes(event.target.value)) {
                console.log(true);
                Sresults.push(item);

                this.setState(() => {
                    return {
                        ProductFound: true
                    }
                })


            }
            else {
                this.setState(() => {
                    return {
                        ProductFound: false
                    }
                })
                return (
                    <div>
                        <h1>item not found</h1>
                    </div>
                )

            }



        });
        console.log(Sresults)
        this.setState(() => {
            return {
                products: Sresults
            }
        })



    }

    //----------------------Getting all items-------

    getFreshItems = () => {
        fetch("http://app-256de236-c58d-471f-9955-aecb3eb83a3d.cleverapps.io/api/stores/getItems")
            .then(response => response.json())
            .then(data => {
                return data
            })



    }
    //----------------------End of Getting all items-------

    //--------------Changing Page------------
    changePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    //--------------End of Changing Page------------



    //-----------------Filtering Items by Category-----------
    filterByCategory = (event) => {

        console.log('clicked....' + Number(event.target.id));
        const tempProducts = this.state.masterCopy;


        const newSearchResults = tempProducts.filter(item => {
            if (item.category_id == event.target.id) {
                return item;
            }

            this.setState(() => {
                return {
                    products: newSearchResults
                }
            })

            console.log(this.state.products);
        })
    }
    //-----------------End of Filtering Items by Category-----------

    //-----------------Filtering Items by Department-----------
    filterByDepartment = (event) => {


        const tempProducts = this.state.masterCopy;

        const newSearchResults = tempProducts.filter(item => {
            if (item.department_id == event.target.id) {
                return item;
            }

            this.setState(() => {
                return {
                    products: newSearchResults
                }
            })

            console.log(this.state.products);
        })
    }
    //-----------------End of Filtering Items by Category-----------

    //-----------------Getting  Items by ID----------- 
    getItem = id => {
        const product = this.state.products.find(item => item.product_id === id);

        return product;


    };
    //-----------------Filtering Items by Category-----------

    handleDetails = id => {
        const product = this.getItem(id);


        this.setState(() => {
            return { detailProduct: product }
        })
    }


    //--------------------Adding Items to the cart-----------
    addToCart = id => {
        let temProducts = [...this.state.products];
        const index = temProducts.indexOf(this.getItem(id));
        const product = temProducts[index];
        product.incart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;



        this.setState(() => {
            return {
                products: temProducts,
                cart: [...this.state.cart, product]

            }
        }, () => { this.addTotals() })

    }

    //--------------------End of Adding Items to the cart-----------


    //--------------------Showing the  details modal-----------
    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true
            }
        })
    }
    //--------------------End of Showing the  details modal-----------


    //--------------------Closing the  details modal-----------
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        })

    }
    //--------------------End of Closing the  details modal-----------


    //--------------------Increasing the Items-----------
    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.product_id === id);

        const index = tempCart.indexOf(selectedProduct);

        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;


        this.setState(() => { return { cart: [...tempCart] } }, () => { this.addTotals() })

    }
    //--------------------End of Increasing the Items-----------

    //--------------------Decreasing the  Items-----------
    decrement = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.product_id === id);

        const index = tempCart.indexOf(selectedProduct);

        const product = tempCart[index];



        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        }
        else {

            product.total = product.count * product.price;
            this.setState(() => { return { cart: [...tempCart] } }, () => { this.addTotals() })
        }


    }

    //--------------------Decreasing the  Items-----------




    //---------------------Removing Item from the cart----------------
    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.product_id !== id);

        const index = tempProducts.indexOf(this.getItem(id));

        let removedProduct = tempProducts[index];

        removedProduct.incart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => {
            this.addTotals()
        })
    }

    //---------------------End of Removing Item from the cart----------------



    //--------------------------Clearing the cart-----------
    clearCart = () => {
        this.setState(() => {
            return {
                cart: []
            };
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    }
    //--------------------------End of Clearing the cart



    //----------------Adding the totals in the cart--------------
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => {
            subTotal += item.total
        });
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));

        const total = subTotal + tax;

        this.setState(() => {
            return {
                cartSubTotal: parseFloat(subTotal.toFixed(2)),
                cartTax: parseFloat(tax.toFixed(2)),
                cartTotal: parseFloat(total.toFixed(2))
            }
        })
    }
    //----------------End of Adding the totals in the cart--------------


    componentDidMount() {
        console.log('sss');
        this.setProducts();
        this.setCategories();
        this.setDepartments();
        this.setColors();

    }


    //-------------------Setting initial categories--------
    setCategories = () => {
        console.log('ssssssssssspppppppp')
        fetch("http://app-256de236-c58d-471f-9955-aecb3eb83a3d.cleverapps.io/api/stores/getCategories")
            .then(response => response.json())
            .then(data => {
                console.log('my Categories' + data[1]);

                this.setState({
                    productCategories: data

                });

                console.log(this.state.productCategories);



            })

    }
    //-------------------End of Setting initial categories--------

    //-------------------Setting initial Departments--------
    setDepartments = () => {
        console.log('Searching Product')

        fetch("http://app-256de236-c58d-471f-9955-aecb3eb83a3d.cleverapps.io/api/stores/getDepartments")
            .then(response => response.json())
            .then(data => {
                console.log('my Categories' + data[1]);

                this.setState({
                    productDepartments: data

                });




            })

    }
    //-------------------Setting initial Departments--------



    //----------------Setting Colors----------

    setColors = () => {

        fetch("http://app-256de236-c58d-471f-9955-aecb3eb83a3d.cleverapps.io/api/stores/getColors")
            .then(response => response.json())
            .then(data => {
                console.log('my Categories' + data[1]);

                this.setState({
                    productColors: data

                });




            })

    }
    //----------------End of Setting Colors----------

    //----------------Setting Products----------
    setProducts = () => {
        fetch("http://app-256de236-c58d-471f-9955-aecb3eb83a3d.cleverapps.io/api/stores/getItems")
            .then(response => response.json())
            .then(data => {

                this.setState({
                    products: data,
                    masterCopy: data,
                    detailProduct: data[0],
                    isLoading: false

                })




            })
    }


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, handleDetails: this.handleDetails,
                addToCart: this.addToCart, openModal: this.openModal, closeModal: this.closeModal,
                increment: this.increment, decrement: this.decrement, removeItem: this.removeItem,
                clearCart: this.clearCart, changePage: this.changePage,
                filterByCategory: this.filterByCategory,
                filterByDepartment: this.filterByDepartment, searchProducts: this.searchProducts,
                closeLoginModal: this.closeLoginModal, openLoginModal: this.openLoginModal,
                changeHandle: this.changeHandle,
                loginHandle: this.loginHandle,closeErrorAlert:this.closeErrorAlert,
                OpenCreateNewUserModal:this.OpenCreateNewUserModal,
                CloseCreateNewUserModal:this.CloseCreateNewUserModal,
                NewUserHandle:this.NewUserHandle,
                logOutHandle: this.logOutHandle
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}




const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };