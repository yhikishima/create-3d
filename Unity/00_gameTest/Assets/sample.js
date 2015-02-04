#pragma strict

public var number1: int = 5;
public var number2: int = 8;

function Start() {
	 Debug.Log(number1 + number2);
	 Debug.Log(33);
}

function Update() {

}

 function OnTriggerEnter() {
	Debug.Log("hit");
}

function OnCollisionEnter() {
	Debug.Log("hit");
}

function OnControllerColliderHit( hit : ControllerColliderHit ) {
	if ( hit.gameObject.tag == "Player" ) {
		 Debug.Log("hit");
	}
}


// create gui button
function OnGUI() {
	if ( GUI.Button(Rect(350, 330, 100, 50), "Button") ) {
		Debug.Log("Unity is wonderful.");
	
	}
}






























