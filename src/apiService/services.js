class Services {

    async getRecipeByName(name) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
            if (response.ok) {
                const contentType = response.headers.get('content-type');
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

    async getRecipeById(id) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            if (response.ok) {
                const contentType = response.headers.get('content-type');
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

    async getRecipeByCategory(name){
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
            if (response.ok) {
                const contentType = response.headers.get('content-type');
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

    async getCategoriesList() {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            if (response.ok) {
                const contentType = response.headers.get('content-type')
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json()
                    // console.log(data);
                    return data;
                } else {
                    console.log(response);
                    console.log('Response is not in JSON format');
                }
            } else {
                console.log('Server responded with an error:', response.status, response.statusText);
            }
        } catch (error) {
            console.log('error is ', error);
        }
    }

    async getFoodByIngredient(name) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}
            `)
            if (response.ok) {
                const contentType = response.headers.get('content-type')
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

    async getIngredientImage(name) {
        try {
            const response = await fetch(`https://www.themealdb.com/images/ingredients/${name}.png`)
            return response.url;

        } catch (error) {
            console.log('error is ', error);
        }
    }

    async getRandomRecipe() {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            if (response.ok) {
                const contentType = response.headers.get('content-type')
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

    async getPopularRecipes() {
        const categories = ['Chicken', 'Dessert', 'Seafood', 'Vegan']
        const result = [];
        try {
            const data = await this.getCategoriesList()
            data.categories.forEach(item => {
                categories.forEach(category => {
                    if (category === item.strCategory) {
                        result.push(item);
                    }
                })
            })
            if (result.length === 4) {
                return result;
            }
        } catch (error) {
            console.log('error', error);
        }
    }

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

    // async getIngredientsDetails(foodName) {
    //     try {
    //         const test = [];
    //         const regexIngredient = /strIngredient\d+/;
    //         const regexQuantity = /strMeasure\d+/;
    //         let index = 1;
    //         if (food != null) {
    //             const ingredientPromises = [];
    //             for (const key in food) {
    //                 if (regexIngredient.test(key) && food[key] !== "") {
    //                     const promise = services.getIngredientImage(food[key]).then(data => {
    //                         console.log('asdf', food[key]);
    //                         const ingredientObj = {
    //                             ingredient: food[key],
    //                             quantity: food[`strMeasure${index}`],
    //                             imgUrl: data
    //                         };
    //                         test.push(ingredientObj);
    //                     })

    //                     ingredientPromises.push(promise);
    //                     index++;


    //                 }
    //             }

    //             Promise.all(ingredientPromises).then(() => {
    //                 return test;
    //             });
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

export default new Services;