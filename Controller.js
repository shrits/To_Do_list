const renderPage = async (req, res, next) => {
    try {
        res.render("Index");
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }

const addActivity = async (req, res, next) => {
    try {
        res.render("NewToDoPage");
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }

const updateActivity = async (req, res, next) => {
    try {
        res.render("UpdateToDoPage");
        }
    catch (error) {
        res.status(500).json({ message: error.message });
               }
    }
export default [renderPage, addActivity, updateActivity];