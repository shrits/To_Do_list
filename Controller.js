const renderPage = async (req, res, next) => {
    try {
        res.render("Index", {title: "List of Activities "});
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }

const addActivity = async (req, res, next) => {
    try {
        res.render("NewToDoPage", {title: "Add Activity "});
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }

const updateActivity = async (req, res, next) => {
    try {
        res.render("UpdateToDoPage", {title: "Update Activity "});
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }
const deleteActivity = async (req, res, next) => {
    try {
        res.render("DeleteToDoPage", {title: "Delete Activity "});
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }    
export default [renderPage, addActivity, updateActivity, deleteActivity];