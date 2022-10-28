<?php

namespace App\Http\Controllers;

use App\Events\SendProjectMessageEvent;
use App\Models\Project;
use App\Models\ProjectMessage;
use App\Http\Requests\ProjectMessageRequest;
use App\Http\Resources\ProjectMessageResource;

class ProjectMessageController extends Controller
{
  public function index(Project $project)
  {
    return ProjectMessageResource::collection($project->messages()->with(['user.avatar'])->get());
  }

  public function store(ProjectMessageRequest $request, Project $project)
  {
    $newMessage = $project->messages()->create([
      'user_id' => $request->user_id,
      'message' => $request->message
    ]);
    event(new SendProjectMessageEvent($newMessage, $project));
    return response()->json(new ProjectMessageResource($newMessage));
  }

  public function update(ProjectMessageRequest $request, Project $project, ProjectMessage $message)
  {
    $updatedMessage = $project->messages()->findOrFail($message->id);
    $updatedMessage->update(['message' => $request->message]);
    return response()->json(new ProjectMessageResource($updatedMessage));
  }

  public function destroy(Project $project, ProjectMessage $message)
  {
    $deletedMessage = $project->messages()->findOrFail($message->id);
    $deletedMessage->delete();
    return response()->json(new ProjectMessageResource($deletedMessage));
  }
}
