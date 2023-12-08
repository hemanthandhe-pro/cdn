fetch('https://cdn.jsdelivr.net/gh/hemanthandhe-pro/cdn@master/hello.js')
            .then(response => response.text())
            .then(scriptContent => {
                // Replace document.write with DOM manipulation
                scriptContent = scriptContent.replace('document.write', 'document.body.innerHTML +=');
                
                // Create a script element
                const script = document.createElement('script');
                
                // Set the script content to the modified content
                script.textContent = scriptContent;

                // Append the script element to the document
                document.body.appendChild(script);
            })
            .catch(error => {
                console.error('Script loading failed:', error);
            });
