
function addNewTask(){
	
	let newTask=document.querySelector('#add').value;
	
	document.querySelector('#add').value='';
	if(newTask==''){
		alert('First add new task');
	}else
	{
	
		let containerElement=document.querySelector('.container'); 
		
		let previewDiv=document.createElement('div');
		containerElement.appendChild(previewDiv);
		previewDiv.setAttribute('class','preview-div');
		
		
		previewDiv.innerHTML=`
			 <div class="preview-group" onclick="done(this)" >
				 <div class="title"><span>${newTask}</span></div>
					<button type="button" onclick="removeElement(this)"class="close-button">x</button>
			  </div>`;
	}
}

function removeElement(el){
	let whDiv=el.closest('.preview-div');
	whDiv.remove();
	console.log('izbrisano je ');
}

function done(el){
	 el.classList.toggle("toggle-done");
}








