# Enhanced Testing Using Workflows

_For conceptual documentation on the concept of Workflows - click [here](/concepts/workflows.md)._

---

Incorporating **Workflows** into your methodology greatly extends the functionality of Caido. The level of customization offered by Caido Workflows allows you to  repeatedly apply certain actions/conversions that are commonly used in your testing process. Anything from encoding data to complex sequences of modifications based on certain conditions by utilizing flow paths are possible with Workflows.

Multi-step processes that, before, needed to be performed manually can be saved within a Workflow for immediate, discretionary and repeated use - ensuring your testing is as time-efficient as possible.

## Workflow Data Types

---

The data types that Workflows intake include:

- **Bytes**
- **Strings**
- **Boolean Values**
- **Integers**
- **Request Objects**
- **Response Objects**

## The Workflows Tab

---

<img alt="Workflows tab." src="../../_images/workflows_tab_layout.png">

1. Select the `Workflows` tab from the left-hand menu within the Caido window.
2. The three types of Workflows (`Passive`/`Active`/`Convert`) are listed horizontally here as tabs. Click to toggle between them.
3. Click on the red `+ New Workflow` button paired with the desired type tab selected to create a new Workflow of that type.
4. Toggling the `Enabled` checkbox from filled to empty will dictate the inclusion/exclusion of the associated Workflow in the user interface respectively.
5. By default, Workflows are present globally (_meaning they will span across all your Projects_). To render a Workflow specific to a project - click the `Switch to project-specific` text within the parenthesis.
6. Clicking the `Edit` button will present the Workflow editor and the `Duplicate` button will create a copy of the Workflow.
7. Clicking on `Community Workflows` will open a browser window to <a href="https://github.com/caido/workflows" target="_blank">Caido's Workflow Github Repository</a>. Here you can download Workflows created by other Caido users or submit your own!
