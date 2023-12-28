// API LINK : 'https://www.themealdb.com/api.php'

// create Services to provide abstraction and reusability
class Services {

    // function to get recipe details by name
    async getRecipeByName(name) {
        try {

            // send request  and fetch data
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);

            // checking wether is response is ok or not(status code: 200)
            if (response.ok) {
                const contentType = response.headers.get('content-type');
                // checking wether the response is json type or not (sometime response is in html format)
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    return data;
                } else {
                    console.log('Response is not in JSON format');
                }
            } else {
                console.log('Server responded with an error:', response.status, response.statusText);
            }
        } catch (error) {
            console.log('error is ', error);
        }
    }

    // function to get recipe details by id
    async getRecipeById(id) {
        try {
            // send request  and fetch data
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

            // checking wether is response is ok or not(status code: 200)
            if (response.ok) {
                const contentType = response.headers.get('content-type');
                // checking wether the response is json type or not (sometime response is in html format)
                if (contentType && contentType.includes('application/json')) {
                    const data = response.json()
                    return data
                } else {
                    console.log('data is not json');
                }
            } else {
                console.log('error in fetching data', response.status, response.statusText);
            }
        } catch (error) {
            console.log('error is', error);
        }
    }

    // function to get recipe details by category name
    async getRecipeByCategory(name) {
        try {
            // send request  and fetch data
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);

            // checking wether is response is ok or not(status code: 200)
            if (response.ok) {
                const contentType = response.headers.get('content-type');

                // checking wether the response is json type or not (sometime response is in html format)
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    return data;
                } else {
                    console.log('Response is not in JSON format');
                }
            } else {
                console.log('Server responded with an error:', response.status, response.statusText);
            }
        } catch (error) {
            console.log('error is ', error);
        }
    }

    // function to get list of recipe category
    async getCategoriesList() {
        try {
            // send request  and fetch data
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            // checking wether is response is ok or not(status code: 200)
            if (response.ok) {
                const contentType = response.headers.get('content-type')
                // checking wether the response is json type or not (sometime response is in html format)
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json()
                    return data;
                } else {
                    console.log('Response is not in JSON format');
                }
            } else {
                console.log('Server responded with an error:', response.status, response.statusText);
            }
        } catch (error) {
            console.log('error is ', error);
        }
    }

    // function to get recipe details by ingredient name
    async getFoodByIngredient(name) {
        try {
            // send request  and fetch data
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}
            `)
            // checking wether is response is ok or not(status code: 200)
            if (response.ok) {
                const contentType = response.headers.get('content-type')
                // checking wether the response is json type or not (sometime response is in html format)
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json()
                    return data
                } else {
                    console.log("Data in not in json format");
                }
            } else {
                console.log('Error while fetching data', response.status, ' the error text : ', response.status);
            }
        } catch (error) {
            console.log('error is ', error);
        }

    }


    // function to get ingredient image by ingredient name
    async getIngredientImage(name) {
        try {
            // send request  and fetch data(to get the proper url)
            const response = await fetch(`https://www.themealdb.com/images/ingredients/${name}.png`)
            return response.url;

        } catch (error) {
            console.log('error is ', error);
        }
    }

    // function to get a random recipe
    async getRandomRecipe() {
        try {
            // send request  and fetch data
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            // checking wether is response is ok or not(status code: 200)
            if (response.ok) {
                const contentType = response.headers.get('content-type')
                // checking wether the response is json type or not (sometime response is in html format)
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    if (data) {
                        return data;
                    } else {
                        console.log('error in response');
                    }
                } else {
                    console.log('data types is not json');
                }
            } else {
                console.log('error while fetching data', response.status, response.statusText);
            }

        } catch (error) {
            console.log('error is', error);
        }
    }

    // function to get a popular recipe(predefined categories)
    async getPopularRecipes() {
        const categories = ['Chicken', 'Dessert', 'Seafood', 'Vegan', 'Pasta']
        const result = [];
        try {
            // logic to get data and store in a array
            const data = await this.getCategoriesList()
            data.categories.forEach(item => {
                categories.forEach(category => {
                    if (category === item.strCategory) {
                        result.push(item);
                    }
                })
            })
            if (result.length >= 4) {
                return result;
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    // function to get loved recipe(on set of predefined value)
    async getMostLovedRecipes() {
        try {
            const result = []
            const dishes = ['Pizza', 'Burgers', 'Pasta', 'Tandoori chicken']

            const promises = dishes.map(dish => this.getRecipeByName(dish));
            const dataArray = await Promise.all(promises)

            dataArray.forEach(data => {
                result.push(data.meals[0]);
            });

            if (result.length > 0) {
                return result;
            }

        } catch (error) {
            console.log('error', error);
        }
    }


}

export default new Services;