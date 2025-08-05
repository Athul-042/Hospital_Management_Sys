let totalPatients = 0;

    document.getElementById("patientForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const disease = document.getElementById("disease").value;

        const patientDiv = document.createElement("div");
        patientDiv.classList.add("patient");
        patientDiv.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Disease:</strong> ${disease}</p>
        `;

        document.getElementById("patientList").appendChild(patientDiv);

        totalPatients++;
        document.getElementById("total").textContent = "Total Patients: " + totalPatients;

        // Reset form
        document.getElementById("patientForm").reset();
    });