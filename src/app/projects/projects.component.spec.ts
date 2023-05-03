import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectsComponent } from "./projects.component";

describe("CounterComponent", () => {
	let fixture: ComponentFixture<ProjectsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProjectsComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProjectsComponent);
		fixture.detectChanges();
	});

	it("should display a title", async(() => {
		const titleText = fixture.nativeElement.querySelector("h1").textContent;
		expect(titleText).toEqual("Counter");
	}));

	it("should start with count 0, then increments by 1 when clicked", async(() => {
		const countElement = fixture.nativeElement.querySelector("strong");
		expect(countElement.textContent).toEqual("0");

		const incrementButton = fixture.nativeElement.querySelector("button");
		incrementButton.click();
		fixture.detectChanges();
		expect(countElement.textContent).toEqual("1");
	}));
});
