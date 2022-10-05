<?php

namespace App\Http\Controllers;

use App\Enums\ProjectStatusEnum;
use App\Enums\RoleEnum;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
  public function index(Request $request)
  {
    $projects = User::find(auth()->user()->id)->projects()->with(['icon', 'status']);

    if ($request->get('filter')) {
      if (intval($request->get('filter')) !== ProjectStatusEnum::ARCHIVED->value) {
        return ProjectResource::collection($projects->where('status_id', $request->get('filter'))->get());
      }

      if (intval($request->get('filter')) === ProjectStatusEnum::ARCHIVED->value) {
        return ProjectResource::collection($projects->where('is_archived', true)->get());
      }
    }

    return ProjectResource::collection($projects->get());
  }

  public function show(Project $project)
  {
    return new ProjectResource(User::find(auth()->user()->id)->projects()->with([
      'icon', 'role', 'status', 'teams', 'members.user.avatar', 'members.role', 'members.teams'
    ])->where('project_id', $project->id)->first());
  }

  public function store(Request $request)
  {
    $project = Project::create([
      'title' => $request->title,
      'description' => $request->description
    ]);

    $project->addMedia(public_path('assets/project-icons/project-icon-' . rand(1, 20) . '.png'))
      ->preservingOriginal()->toMediaCollection('project-icon', 'public');

    $project->teams()->createMany($request->teams);

    $member = $project->members()->create([
      'user_id' => auth()->user()->id, 'role_id' => RoleEnum::PROJECT_OWNER
    ]);

    $member->teams()->sync($project->teams()->first());

    return response()->noContent();
  }

  public function update(UpdateProjectRequest $request, Project $project)
  {
    $project->update($request->validated());
    return response()->noContent();
  }
}